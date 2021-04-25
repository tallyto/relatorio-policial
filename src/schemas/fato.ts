import {Schema, model, Document} from 'mongoose';
interface fatoInterface extends Document  {
  natureza: string,
  cod_ocorrencia: string,
  cod_providencia: string,
  envolvidos: string, 
}
const fatoSchema = new Schema({
  natureza: String,
  cod_ocorrencia: String,
  cod_providencia: String,
  envolvidos: String, 
}, {timestamps: true});
const fato = model<fatoInterface>('fato', fatoSchema)
export default fato