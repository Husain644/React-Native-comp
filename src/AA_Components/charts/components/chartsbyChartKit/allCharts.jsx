import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from "react-native-chart-kit";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import React from "react";

const ChartsKitHome = () => {
  const screenWidth = Dimensions.get("window").width;

  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
const data = [
  { 
    name: "Hindus",
    population: 966000000,
    color: "#ff7707",  // yellow
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  },
  { 
    name: "Muslims",
    population: 172000000,
    color: "#00ff15",  // blue
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  },
  { 
    name: "Christians",
    population: 27800000,
    color: "#fcfcfc",  // green
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  },
  { 
    name: "Sikhs",
    population: 20830000,
    color: "rgba(220, 53, 69, 1)",  // red
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  },
  { 
    name: "Buddhists",
    population: 8440000,
    color: "#3371f8",  // teal
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  },
  { 
    name: "Jains",
    population: 4450000,
    color: "rgba(108, 117, 125, 1)",  // gray
    legendFontColor: "#7F7F7F",
    legendFontSize: 10
  }
];

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
  
      }}
    >
      <Text>ChartsKitHome</Text>
      <View>
        <Text style={{marginHorizontal: 10}}>Bezier Line Chart</Text>
        <LineChart
          data={{
            labels: ["January", "February", "March", "April", "May", "June"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          yAxisLabel="$"
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#e26a00",
            backgroundGradientFrom: "#fb8c00",
            backgroundGradientTo: "#ffa726",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#ffa726",
            },
          }}
          bezier
          style={{
            marginVertical: 5,
            borderRadius: 16,
          }}
        />
      </View>
     <View style={{backgroundColor:'#ccc'}}>
              <Text>Pie Chart</Text>
              <PieChart
              data={data}
              width={screenWidth}
              height={220}
              chartConfig={chartConfig}
              accessor={"population"}
              backgroundColor={"#eaea"}
              paddingLeft={"15"}
              center={[10, 0]}
              absolute
              />
     </View>
    </View>
  );
};

export default ChartsKitHome;

const styles = StyleSheet.create({});
