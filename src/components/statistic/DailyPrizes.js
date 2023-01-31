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
let TotalWinnings = [];
let WinningsClaimed = [];
let data = null;

const DailyPrizes = ({ stat }) => {

  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
       if (!data) {
         stat.map((day) => {
           labels.push(day.day + " " + day.month);
           TotalWinnings.push(day.TotalWinnings);
           WinningsClaimed.push(day.WinningsClaimed);
         });

         data = {
           labels: labels,
           datasets: [
             {
               label: "Выигрыш суммарный",
               data: TotalWinnings,
               fill: false,
               backgroundColor: "rgb(255, 99, 132)",
               borderColor: "rgba(255, 99, 132, 0.2)",
             },
             {
               label: "Выигрыш оплаченый",
               data: WinningsClaimed,
               fill: false,
               backgroundColor: "rgb(65, 150, 132)",
               borderColor: "rgba(65, 150, 132, 0.2)",
             },
           ],
         };
       }
    
    setLoaded(true);
  }, []);

  return (
    <div style={{ width: "100%" }}>
      {loaded && <Line data={data} options={options} />}
    </div>
  );
};

export default DailyPrizes;
