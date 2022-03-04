import createStatementData from "./createStatementData.js";
import usd from "./util/usd.js";

function htmlStatement(invoice, plays) {
  return renderHtml(createStatementData(invoice, plays));
}

function renderHtml(data) {
  let result = `<h1>청구 내역 (고객명: ${data.customer})</h1>`;
  result += "<table>\n";
  result += "<tr><th>연극</th><th>좌석 수</th><th>금액</th></tr>";
  for (let perf of data.performances) {
    result += `<tr><td>${perf.play.name}</td><td>(${perf.audience}석)</td>`;
    result += `<td>${usd(perf.amount)}</td></tr>`;
  }
  result += "</table>\n";
  result += `<p>총액: ${usd(data.totalAmount)}\n</p>`;
  result += `<p>적립 포인트: ${data.totalVolumeCredits}점\n</p>`;
  return result;
}