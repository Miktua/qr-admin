


import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";



const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
};
  let labels = [];
  let PrizesActivated = [];
  let PrizesClaimed = [];
  let data = null;

const DailyGraph = ({stat}) => {
    const [loaded, setLoaded] = useState(false)
    useEffect(() => {
        if(!data) {

            stat.map((day) => {
            labels.push(day.day + " " + day.month);
            PrizesActivated.push(day.PrizesActivated);
            PrizesClaimed.push(day.PrizesClaimed);
            });

            data = {
            labels: labels,
            datasets: [
                {
                label: "Активировано QR",
                data: PrizesActivated,
                fill: false,
                backgroundColor: "rgb(255, 99, 132)",
                borderColor: "rgba(255, 99, 132, 0.2)",
                },
                {
                label: "Оплачено призов",
                data: PrizesClaimed,
                fill: false,
                backgroundColor: "rgb(65, 150, 132)",
                borderColor: "rgba(65, 150, 132, 0.2)",
                },
            ],
            };

        }
        
    setLoaded(true);
  }, [])

  return <div style={{width: "100%"}}>{loaded && <Line data={data} options={options} />}</div>;


}


export default DailyGraph