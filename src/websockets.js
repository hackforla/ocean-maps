import { addDataToMap } from "kepler.gl/actions"
import axios from "axios"
import parse from "csv-parse"
import { head, tail, map } from "lodash"
const csvURL = "https://raw.githubusercontent.com/ai-on-the-beach/GFW-Analysis/master/Fishing_By_Vessel/2018/20180101.csv";

export default store => {
  window.loadData = async () => {

    const csv = await axios({
      method: 'get',
      url: csvURL,
      responseType: 'stream'
    });

    parse(csv.data, (err, output) => {
      const data = head(output);
      const fields = map(data, name => ({
        name
      }));
      console.log(data);
      store.dispatch(addDataToMap({
          datasets: [
            {
              data: {
                fields,
                rows: tail(output)
              }
            }
          ]
        })
      )
    });


  }
}
