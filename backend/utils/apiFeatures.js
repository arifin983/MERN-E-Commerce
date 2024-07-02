class apiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }
  search() {
    let keyword = {};
    if (this.queryStr && this.queryStr.keyword && this.queryStr.keyword.trim()) {
        keyword = {
            name: { $regex: this.queryStr.keyword.trim(), $options: "i" },
        };
    }
    console.log( process.env.JWT_EXPIRE)
    // console.log("keyword:",keyword);
    this.query = this.query.find({ ...keyword });
    return this;
  }
  filter() {
    const copyQueryStr = { ...this.queryStr };
    // console.log(copyQueryStr);
    //Remove some field for category
    const removeSomeField = ["keyword", "page", "limit"];
    removeSomeField.forEach((key) => delete copyQueryStr[key]);
    // console.log(copyQueryStr);
    //filter for pricing and rating
    let queryStr = JSON.stringify(copyQueryStr);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);
    this.query = this.query.find(JSON.parse(queryStr));
    // console.log("finaldata: ",queryStr);
    return this;
  }
  pagination(productPerPage) {
    const currentPage = this.queryStr.page || 1;
    const skip = productPerPage * (currentPage - 1);
    this.query = this.query.limit(productPerPage).skip(skip);
    return this;
  }
}
module.exports = apiFeatures;
