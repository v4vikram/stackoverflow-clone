import mongoose from "mongoose";
const DB_URL = `mongodb+srv://stackuser:stackuser.123@cluster0.bo19t.mongodb.net/stackoverflow?retryWrites=true&w=majority`;

const db_connect = async () => {
   try {
      await mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
      console.log(`Server connect to db`)
   } catch (error) {
      console.log(`Server connect to db ${error}`)
   }
}
db_connect();

// const connection = mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true})
// .then(()=>console.log(`Server connect to db`))
// .catch(()=>console.log(`Server connect to db`));