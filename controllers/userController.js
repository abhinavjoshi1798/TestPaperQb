const axios = require("axios");

exports.sentOTP = async (req, res) => {
  try {
    const { mobile } = req.body;
    const url = "http://enterprise.smsgupshup.com/GatewayAPI/rest";
    const userId = "2000210830";
    const password = "Allen$webtech2022";
    const params = {
      v: "1.1",
      userid: userId,
      password: password,
      mask: "ALENQB",
      auth_scheme: "plain",
      msg_type: "text",
      format: "text",
      method: "TWO_FACTOR_AUTH",
      phone_no: mobile,
      msg: "Your OTP for Allen QB-Stats Password Change is %code%. Please enter OTP in the provided field. ALLEN",
      otpCodeLength: "4",
      otpCodeType: "NUMERIC",
    };
    const smsResponse = await axios.get(url, { params });

    const responseParts = smsResponse.data.split("|");
    if (smsResponse.data.includes("success")) {
      const response = { success: responseParts[0], message: responseParts[3] };
      return res.status(200).json(response);
    } else {
      const response = { error: responseParts[0], message: responseParts[2] };
      return res.status(500).json(response);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

exports.verifyOTP = async (req, res) => {
  const { otp, mobile } = req.body;
  try {
    // const mobile = parseInt(mobile);
    const url = "http://enterprise.smsgupshup.com/GatewayAPI/rest";
    const userid = "2000210830";
    const password = "Allen$webtech2022";
    const params = {
      v: "1.1",
      userid: userid,
      password: password,
      method: "TWO_FACTOR_AUTH",
      phone_no: mobile,
      otp_code: otp,
    };
    const smsResponse = await axios.get(url, { params });
    const responseParts = smsResponse.data.split("|");
    if (smsResponse.data.includes("success")) {
      const response = { success: responseParts[0], message: responseParts[3] };
      return res.status(200).json(response);
    } else {
      const response = { error: responseParts[0], message: responseParts[2] };
      return res.status(500).json(response);
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
