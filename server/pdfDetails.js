const mongoose  = require("mongoose");

const pdfDetailsSchema = new mongoose.Schema({
    pdf : String,
    title : String
} , {collection : "PdfDetails"})

mongoose.model("PdfDetails" , pdfDetailsSchema)