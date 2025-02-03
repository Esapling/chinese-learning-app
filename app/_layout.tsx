import { Stack } from "expo-router";

import { StatusBar } from "expo-status-bar";


export default function RootLayout() {
  return (
    <>
  <Stack>
  <Stack.Screen name="index" options={{ title: "中 文 很 好" }} />
  </Stack>
  <StatusBar style="auto" />
  </>
  );
}
