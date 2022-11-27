import api from "@/apis/api";

async function createBidding ({
  title,
  description,
  minimumValue,
  bidValue,
  createdBy,
  dueDate
}) {
  try {
    const response = await api.post("/bidding",
      title,
      description,
      minimumValue,
      bidValue,
      createdBy,
      dueDate
    );

    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function updateBidding ({
  title,
  description,
  minimumValue,
  dueDate,
  biddingId
}) {
  try {
    const response = await api.patch(`/bidding/${biddingId}`,
      title,
      description,
      minimumValue,
      dueDate
    );

    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function bid ({
  biddingId,
  userId,
  value
}) {
  try {
    const response = await api.post(`/bidding/${biddingId}`,
      userId,
      value
    );

    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function getBidding (biddingId) {
  try {
    const response = await api.get(`/bidding/${biddingId}`);

    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function getAllBiddings () {
  try {
    const response = await api.get("/bidding");

    return response.data
  } catch (error) {
    console.log(error)
  }
}

async function deleteBidding (biddingId) {
  try {
    const response = await api.delete(`/bidding/${biddingId}`);

    return response.data
  } catch (error) {
    console.log(error)
  }
}

export default {
  createBidding,
  bid,
  getBidding,
  getAllBiddings,
  deleteBidding,
  updateBidding
}
