import { Router, Request, Response} from 'express'

const router = Router()

router.get('/chatroom', (req: Request, res: Response) => {
  return res.render('chatroom')
})

export {
  router
}