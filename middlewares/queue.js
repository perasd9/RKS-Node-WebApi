const Bull = require("bull");
const db = require("../Models");

const ticketQueue = new Bull("ticket-purchase", {
  limiter: {
    max: 1,
    duration: 1000,
  },
});

const addToTicketQueue = async (data) => {
  const job = await ticketQueue.add({ ...data });
  return job;
};

const processTicketQueue = () => {
  ticketQueue.process(async (job) => {
    try {
      console.log("Processing ticket purchase for:");

      const newKarta = await db.Karta.create(job.data);

      await new Promise((resolve) => setTimeout(resolve, 5000));
      console.log("Ticket purchase processed for:");
      return job.data;
    } catch (error) {
      console.error("Error processing ticket purchase:", error);
    }
  });
};

module.exports = { ticketQueue, addToTicketQueue, processTicketQueue };
