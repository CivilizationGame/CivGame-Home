import axios from 'axios';

export default async function handler(req, res) {
  try {
    const result = await axios({
      url: `http://${process.env.BACKEND_IP}:${process.env.BACKEND_PORT}/donate/preset`,
            method: 'GET',
    });
    result.data.data = result.data.data.reverse();
    return res.status(200).json(result.data);
  } catch (error) {
    if (!error.response) return res.status(500).json({ message: 'Internal server error' });

    const {
      status,
      data: { message },
    } = error.response;
    return res.status(status).json({ message });
  }
}
