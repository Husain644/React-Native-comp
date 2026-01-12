import React, { useState } from "react";
import { View, Text, Button, ActivityIndicator, Alert } from "react-native";
import axios from "axios";
import { WebView } from "react-native-webview";

const BACKEND_BASE_URL = "http://192.168.8.197:8000/payment";

const PaymentScreen = () => {
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState(null);

  const startPayment = async () => {
    try {
      setLoading(true);

      const resp = await axios.post(`${BACKEND_BASE_URL}/create-order`, {
        amount: 10.0,
        customerId: "CUSTOMAR_123",
        customerEmail: "husain68644@gmail.com",
        customerPhone: "6396625635",
      });

      if (!resp.data.success) {
        throw new Error(resp.data.message || "Failed to create order");
      }

      const { paymentLinkUrl } = resp.data;

      if (!paymentLinkUrl) {
        throw new Error("paymentLinkUrl missing from backend response");
      }

      console.log("Opening payment URL:", paymentLinkUrl);
      setPaymentUrl(paymentLinkUrl);
    } catch (err) {
      console.error("startPayment error:", err);
      Alert.alert("Error", err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };


if (paymentUrl) {
  return (
    <WebView
      source={{ uri: paymentUrl,
            headers: {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
    }
       }}
      startInLoadingState
      onError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.log("WebView onError:", nativeEvent);
      }}
      onLoadStart={(e) => console.log('userAgent',e.nativeEvent.userAgent)}
      onHttpError={(syntheticEvent) => {
        const { nativeEvent } = syntheticEvent;
        console.log("WebView onHttpError:", nativeEvent);
      }}
      onNavigationStateChange={(navState) => {
        const url = navState.url || "";
        console.log("WebView URL:", url);

        if (url.startsWith("https://techtt.site/payment/return")) {
          Alert.alert("Payment flow finished", "Check backend status/logs.");
          setPaymentUrl(null);
        }
      }}
    />
  );
}


  // Default screen with a Pay button
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ marginBottom: 16 }}>Pay with Cashfree (WebView)</Text>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Button title="Pay ₹10" onPress={startPayment} />
      )}
    </View>
  );
};

export default PaymentScreen;
