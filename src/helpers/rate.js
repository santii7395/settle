module.exports = function Rate(pair, rate, fee){
    this.Pair = pair,
    this.Original_Rate= rate,
    this.Fee= fee,
    this.Fee_amount= rate * (fee / 100),
    this.Rate_with_markup_fee = rate * (fee / 100 + 1)
}