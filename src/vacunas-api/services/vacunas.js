//const { vacunasMock } = require('../mocks/vacunas');
const MongoLib = require('../lib/mongo');

class VacunasService {
  constructor() {
    this.collection = 'vacunas';
    this.mongoDB = new MongoLib();
  }

  async getVacunas({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const vacunas = await this.mongoDB.getAll(this.collection, query);
    return vacunas || [];
  }

  async getVacuna({ id }) {
    const vacuna = await this.mongoDB.get(this.collection, id);
    return vacuna || {};
  }

  async createVacuna({ vacuna }) {
    const createMovieId = await this.mongoDB.create(this.collection, vacuna);
    return createMovieId;
  }

  async updateVacuna({ id, vacuna } = {}) {
    const updatedMovieId = await this.mongoDB.update(
      this.collection,
      id,
      vacuna
    );
    return updatedMovieId;
  }

  async deleteVacuna({ id }) {
    const deletedMovieId = await this.mongoDB.delete(this.collection, id);
    return deletedMovieId;
  }
}

module.exports = VacunasService;