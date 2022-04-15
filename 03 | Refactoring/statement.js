import invoices from "./data/invoices.json";
import plays from "./data/plays.json";
import createStatementData from "./createStatementData.js";
import usd from "./util/usd.js";

function statement(invoice, plays) {
  return renderPlainText(createStatementData(invoice, plays));
}

function renderPlainText(data) {
  let result = `\n청구 내역 (고객명: ${data.customer})\n`;
  for (let perf of data.performances) {
    result += `${perf.play.name}: ${usd(perf.amount)} (${perf.audience}석)\n`;
  }
  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;
  return result;
}

console.log(statement(invoices, plays));