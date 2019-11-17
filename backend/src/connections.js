import dbConfig from './database/db';
import mongoose from 'mongoose';
mongoose.set('debug', true);


(async () => {
  try {
    await mongoose.connect(dbConfig.db, {
      useNewUrlParser: true
    });
  } catch (e) {
    console.error('Database connection error!');
  }
})();
export default mongoose;
