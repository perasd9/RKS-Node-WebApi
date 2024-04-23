const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("./Repository/context");
const adminRoutes = require("./routes/adminRoute");
const korisnikRoutes = require("./routes/korisnikRoute");
const dogadjajRoutes = require("./routes/dogadjajRoute");
const kartaRoutes = require("./routes/kartaRoute");
const tipKarteRoutes = require("./routes/tipKarteRoute");
const path = require("path");

const app = express();

app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", adminRoutes);
app.use("/", korisnikRoutes);
app.use("/", tipKarteRoutes);

app.use("/", dogadjajRoutes);
app.use("/", kartaRoutes);

const PORT = process.env.PORT || 5000;
const { ticketQueue, processTicketQueue } = require("./middlewares/queue");

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
  processTicketQueue();
});
