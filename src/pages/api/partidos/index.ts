import { NextApiRequest, NextApiResponse } from 'next'
import { partidoDataSample } from '../../../../utils/partidosData'

const handler = (_req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (!Array.isArray(partidoDataSample)) {
      throw new Error('Partido não encontrado')
    }

    res.status(200).json(partidoDataSample)
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: err.message })
  }
}

export default handler
