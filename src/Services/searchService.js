import axios from 'axios';
const get = async (querry) => {
  try {
    const res = await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${querry}&key=AIzaSyB2fVghe51ROLtck4jq-3jX5W0Frs0aa6s`,
      {
        params: {
          q: querry,
        },
      },
    );
    return res.data.items;
  } catch (error) {
    console.error(error.message);
  }
};

export { get };
