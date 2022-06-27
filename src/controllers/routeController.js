import responseHandler from '../helpers/responseHandler';
import model from '../models';
import {getPagination, getPagingData} from '../helpers/paginationHandler';
import {draw} from '../helpers/drawCoordinates';
const busRoutes = model.routes;

const addRoute = async (req, res) => {
  // eslint-disable-next-line max-len
  if (!(req.body.origin && req.body.destination && req.body.distance && req.body.code && req.body.latitude && req.body.longitude)) {
    return responseHandler(res, 400, req.t('missing_params'));
  };

  const point = draw(req.body.latitude, req.body.longitude);

  await busRoutes.findOrCreate({
    where: {
      origin: req.body.origin,
      destination: req.body.destination,
      code: req.body.code,
      distance: req.body.distance,
    },
    defaults: {coordinates: point},
  }).then((created) => {
        // eslint-disable-next-line max-len
        created[1] ? responseHandler(res, 201, req.t('created_ok')) : responseHandler(res, 409, req.t('already_exist'));
  });
};

const findAll = async (req, res) => {
  const {page, size} = req.query;
  const {limit, offset} = getPagination(page, size);

  await busRoutes.findAndCountAll({limit, offset})
      .then((data) => {
        const response = getPagingData(data, page, limit);
        res.send(response);
      });
};

const fetchOne = async (req, res) => {
  const id = req.params.id;

  await busRoutes.findOne({
    where: {
      routeId: id,
    },
  }).then((data) => {
        // eslint-disable-next-line max-len
        null != data ? res.send(data) : responseHandler(res, 404, req.t('not_found'));
  });
};

const updateRoute = async (req, res) => {
  const id = req.params.id;
  let latitude = req.body.latitude;
  let longitude = req.body.longitude;
  await busRoutes.findOne({where: {routeId: id}})
      .then((data) => {
        if (data != null) {
                // eslint-disable-next-line max-len
                req.body.latitude == undefined ? (latitude = data.coordinates[0]) : (req.body.latitude);
                // eslint-disable-next-line max-len
                req.body.longitude == undefined ? (longitude = data.coordinates[1]) : (req.body.longitude);
        } else {
          responseHandler(res, 400, req.t('updated_invalid_req'));
        }
      });
  // eslint-disable-next-line max-len
  const passMap = () => req.body.latitude || req.body.longitude ? {coordinates: draw(latitude, longitude)} : req.body;

  await busRoutes.update(passMap(), {
    where: {
      routeId: id,
    },
  }).then((num) => {
    num[1].length > 0 && responseHandler(res, 200, req.t('updated_ok'));
  });
};

const removeRoute = async (req, res) => {
  const id = req.params.id;

  await busRoutes.destroy({
    where: {routeId: id},
  }).then((num) => {
        // eslint-disable-next-line max-len
        1 == num ? responseHandler(res, 200, req.t('deleted_ok')) : responseHandler(res, 400, req.t('delete_invalid_req'));
  });
};

const deleteAll = async (req, res) => {
  await busRoutes.destroy({
    where: {},
    truncate: false,
  }).then((nums) => {
    responseHandler(res, 200, req.t('many_deleted'));
  });
};

// eslint-disable-next-line max-len
export {addRoute, findAll, fetchOne as findOne, updateRoute, removeRoute, deleteAll};
