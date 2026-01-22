const express = require('express')
const router = express.Router();

const servicosController = require('../controllers/servicosController')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, '..', '..', 'uploads'))
  },
  filename: (req, file, cb) => {
    const ts = Date.now()
    const safe = file.originalname.replace(/\s+/g, '-').toLowerCase()
    cb(null, `${ts}-${safe}`)
  }
})
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (!file.mimetype || !file.mimetype.startsWith('image/')) return cb(new Error('Arquivo inválido'))
    cb(null, true)
  }
})

router.get('/', servicosController.listar)

router.post('/', servicosController.criar)

router.post('/upload', upload.single('imagem'), (req, res) => {
  const f = req.file
  if (!f) return res.status(400).json({ erro: 'Arquivo obrigatório' })
  const url = `/uploads/${f.filename}`
  res.json({ imagem_url: url })
})

router.put('/:id', servicosController.atualizar)

router.patch('/:id/status', servicosController.alterarStatus);

module.exports = router;
