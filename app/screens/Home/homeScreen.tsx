import * as React from "react";
import { Text, View, Image, ScrollView } from "react-native";

interface ContentType {
  contentTitle: string;
  picturesURL: string[];
}

interface ContentTypeArray extends Array<ContentType> {}

const ExampleContent: ContentTypeArray = [
  {
    contentTitle:
      "The mockingbird, found in the Americas, is renowned for its exceptional ability to imitate other birds' songs and sounds. It fills the air with a joyful melody during the warmer months, earning its name from its talent for mimicking. This bird is not only an excellent singer but also an important pollinator and seed spreader in its ecosystem.",
    picturesURL: [
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
    ],
  },
  {
    contentTitle:
      "The mockingbird, found in the Americas, is renowned for its exceptional ability to imitate other birds' songs and sounds. It fills the air with a joyful melody during the warmer months, earning its name from its talent for mimicking. This bird is not only an excellent singer but also an important pollinator and seed spreader in its ecosystem.",
    picturesURL: [
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
    ],
  },
  {
    contentTitle:
      "The mockingbird, found in the Americas, is renowned for its exceptional ability to imitate other birds' songs and sounds. It fills the air with a joyful melody during the warmer months, earning its name from its talent for mimicking. This bird is not only an excellent singer but also an important pollinator and seed spreader in its ecosystem.",
    picturesURL: [
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
      "https://i.natgeofe.com/k/a579e318-8aee-4837-881d-eb403f903b9d/NORTHERN-MOCKINGBIRD_3x2.jpg",
    ],
  },
];

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        // marginBottom: 30,
      }}
    >
      <ScrollView>
        {ExampleContent.map((e, key) => {
          return (
            <View
              key={key}
              style={{
                width: "100%",
                height: 350,
                marginTop: 30,
                display: "flex",
                flexDirection: "column",
                // paddingBottom: 10,
                borderBottomWidth: 1,
                borderBlockColor: "black",
                borderStyle: "solid",
              }}
            >
              <Text style={{ marginLeft: 10, marginBottom: 10 }}>
                {e.contentTitle}
              </Text>
              <View style={{ display: "flex", flexDirection: "row" }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  style={{ height: 500 }}
                >
                  {e.picturesURL.map((item, key) => (
                    <Image
                      source={{ uri: item }}
                      key={key}
                      style={{
                        height: 200,
                        width: 200,
                        marginLeft: 10,
                        borderRadius: 30,
                      }}
                    />
                  ))}
                </ScrollView>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
