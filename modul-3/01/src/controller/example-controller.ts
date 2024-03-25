import express from 'express';
import ExampletService from '../service/example-service';

const router = express.Router();

const exampleService = new ExampletService()

router.get('/', (req, res) => {
  const result = exampleService.getData()

  res.send(result)
});

router.post('/', (req, res) => {
  const result = exampleService.postData()

  res.send(result)
});

router.put('/:id', (req, res) => {
  const exmapleId = req.params.id

  const result = exampleService.putData(+exmapleId)

  res.send(result)
});

router.delete('/:id', (req, res) => {
  const exmapleId = req.params.id

  const result = exampleService.deleteData(+exmapleId)

  res.send(result)
});

router.patch('/:id', (req, res) => {
  const exampleId = req.params.id

  const result = exampleService.patchData(+exampleId)

  res.send(result)
});

export default router;
