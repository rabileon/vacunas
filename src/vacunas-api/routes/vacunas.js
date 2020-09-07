const express = require('express');
//const { vacunasMock } = require('../mocks/vacunas');
const VacunasService = require('../services/vacunas');

function vacunasApi(app) {
    const router = express.Router();
    app.use("/api/vacunas",router);

    const vacunasService =new VacunasService();

    router.get("/", async function(req,res, next){
        const { tags } = req.query;
        try {
            const vacunas = await vacunasService.getVacunas({ tags });

            res.status(200).json({
                data: vacunas,
                message:'Listado de vacunas'
            });

        }catch (err){
            next(err);
        }
    })

    router.get("/:id", async function(req,res, next){
        const { id } = req.params; 
        try {
            const vacuna = await vacunasService.getVacuna({ id });

            res.status(200).json({
                data: vacuna,
                message:'vacuna retrieved'
            });

        }catch (err){
            next(err);
        }
    })

    router.post("/", async function(req,res, next){
        const { body: vacuna } =req;
        try {
            const createVacunaId = await vacunasService.createVacuna({ vacuna });

            res.status(201).json({
                data: createVacunaId,
                message:'move created'
            });

        }catch (err){
            next(err);
        }
    })

    router.put("/:id", async function(req,res, next){
        const { body: vacuna } =req;
        const { id } = req.params; 
        try {
            const updateVacunaId = await vacunasService.updateVacuna({ id, vacuna });

            res.status(200).json({
                data: updateVacunaId,
                message:'vacuna updated'
            });

        }catch (err){
            next(err);
        }
    })

    router.delete("/:id", async function(req,res, next){
        const { id } = req.params; 
        try {
            const deltedMovieID = await vacunasService.deleteVacuna( {id});

            res.status(200).json({
                data: deltedMovieID,
                message:'vacuna deleted'
            });

        }catch (err){
            next(err);
        }
    })
}

module.exports = vacunasApi;
