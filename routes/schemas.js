/**
 * @swagger
 * tags:
 *   name: Bicicletas
 *   description: API para la gestión de bicicletas
 * /api/bicicletas:
 *   get:
 *     summary: Listar todas las bicicletas
 *     tags: [Bicicletas]
 *     responses:
 *       200:
 *         description: Lista de bicicletas.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Error del servidor
 * /api/bicicletas/create:
 *   post:
 *     summary: Crear una nueva bicicleta
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: La bicicleta creada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Error del servidor
 * /api/bicicletas/update:
 *   put:
 *     summary: Actualizar una bicicleta existente
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: La bicicleta actualizada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Error del servidor
 * /api/bicicletas/delete:
 *   delete:
 *     summary: Eliminar una bicicleta existente
 *     tags: [Bicicletas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Bicicleta'
 *     responses:
 *       200:
 *         description: La bicicleta eliminada.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Bicicleta'
 *       500:
 *         description: Error del servidor
 * components:
 *   schemas:
 *     Bicicleta:
 *       type: object
 *       required:
 *         - title
 *         - author
 *         - finished
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the bicicleta
 *         title:
 *           type: string
 *           description: The title of your bicicleta
 *         author:
 *           type: string
 *           description: The bicicleta author
 *         finished:
 *           type: boolean
 *           description: Whether you have finished reading the bicicleta
 *         createdAt:
 *           type: string
 *           format: date
 *           description: The date the bicicleta was added
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 *         finished: false
 *         createdAt: 2020-03-10T04:05:06.157Z
 */