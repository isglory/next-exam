function removeDebugWin() {
  var div = document.getElementById('debug_win');
  div.style.display = 'none';
  div.innerHTML = '';
}
function updateDebugWin(inp) {
  var debug_win_checkbox = document.getElementById('debug_win_checkbox');
  if (!!!debug_win_checkbox || !debug_win_checkbox.checked) {
    return;
  }
  var div = document.getElementById('debug_win');
  var closeBtn = document.createElement('div');
  closeBtn.className = 'closeBtn';
  closeBtn.innerHTML = '[DEBUG] postMessage 수신 &nbsp;&nbsp;&nbsp; <span onclick=\'javascript:removeDebugWin()\'><b>[X]</b></span>';
  var pre = document.createElement('pre');
  pre.className = 'syntaxHighlight popupSize';
  pre.innerHTML = inp;
  div.appendChild(closeBtn);
  div.appendChild(pre);
  div.style.display = 'block';
}
function syntaxHighlight(json) {
  json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
    var cls = 'number';
    if (/^"/.test(match)) {
      if (/:$/.test(match)) {
        cls = 'key';
      } else {
        cls = 'string';
      }
    } else if (/true|false/.test(match)) {
      cls = 'boolean';
    } else if (/null/.test(match)) {
      cls = 'null';
    }
    return '<span class="' + cls + '">' + match + '</span>';
  });
}

// unused
// async function signIn(params) {
//     const { customer_id, username, password } = params;
//     const URL = 'https://kyc-api.useb.co.kr/sign-in'
//
//     const res = await fetch(URL, {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({
//             customer_id: Number(customer_id),
//             username,
//             password
//         })
//     });
//     return await await res.json();
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianMvdXRpbC5qcyIsIm5hbWVzIjpbInJlbW92ZURlYnVnV2luIiwiZGl2IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiZGlzcGxheSIsImlubmVySFRNTCIsInVwZGF0ZURlYnVnV2luIiwiaW5wIiwiZGVidWdfd2luX2NoZWNrYm94IiwiY2hlY2tlZCIsImNsb3NlQnRuIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInByZSIsImFwcGVuZENoaWxkIiwic3ludGF4SGlnaGxpZ2h0IiwianNvbiIsInJlcGxhY2UiLCJtYXRjaCIsImNscyIsInRlc3QiXSwic291cmNlcyI6WyJqcy91dGlsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHJlbW92ZURlYnVnV2luKCkge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWdfd2luJyk7XG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBkaXYuaW5uZXJIVE1MID0gJyc7XG59XG5mdW5jdGlvbiB1cGRhdGVEZWJ1Z1dpbihpbnApIHtcbiAgY29uc3QgZGVidWdfd2luX2NoZWNrYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlYnVnX3dpbl9jaGVja2JveCcpO1xuICBpZiAoISEhZGVidWdfd2luX2NoZWNrYm94IHx8ICFkZWJ1Z193aW5fY2hlY2tib3guY2hlY2tlZCkge1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVidWdfd2luJyk7XG4gIGNvbnN0IGNsb3NlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNsb3NlQnRuLmNsYXNzTmFtZSA9ICdjbG9zZUJ0bic7XG4gIGNsb3NlQnRuLmlubmVySFRNTCA9ICdbREVCVUddIHBvc3RNZXNzYWdlIOyImOyLoCAmbmJzcDsmbmJzcDsmbmJzcDsgPHNwYW4gb25jbGljaz1cXCdqYXZhc2NyaXB0OnJlbW92ZURlYnVnV2luKClcXCc+PGI+W1hdPC9iPjwvc3Bhbj4nO1xuICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcbiAgcHJlLmNsYXNzTmFtZSA9ICdzeW50YXhIaWdobGlnaHQgcG9wdXBTaXplJztcbiAgcHJlLmlubmVySFRNTCA9IGlucDtcbiAgZGl2LmFwcGVuZENoaWxkKGNsb3NlQnRuKTtcbiAgZGl2LmFwcGVuZENoaWxkKHByZSk7XG4gIGRpdi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cbmZ1bmN0aW9uIHN5bnRheEhpZ2hsaWdodChqc29uKSB7XG4gIGpzb24gPSBqc29uLnJlcGxhY2UoLyYvZywgJyZhbXA7JykucmVwbGFjZSgvPC9nLCAnJmx0OycpLnJlcGxhY2UoLz4vZywgJyZndDsnKTtcbiAgcmV0dXJuIGpzb24ucmVwbGFjZSgvKFwiKFxcXFx1W2EtekEtWjAtOV17NH18XFxcXFtedV18W15cXFxcXCJdKSpcIihcXHMqOik/fFxcYih0cnVlfGZhbHNlfG51bGwpXFxifC0/XFxkKyg/OlxcLlxcZCopPyg/OltlRV1bK1xcLV0/XFxkKyk/KS9nLCBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICBsZXQgY2xzID0gJ251bWJlcic7XG4gICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBpZiAoLzokLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICBjbHMgPSAna2V5JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNscyA9ICdzdHJpbmcnO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoL3RydWV8ZmFsc2UvLnRlc3QobWF0Y2gpKSB7XG4gICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgfSBlbHNlIGlmICgvbnVsbC8udGVzdChtYXRjaCkpIHtcbiAgICAgIGNscyA9ICdudWxsJztcbiAgICB9XG4gICAgcmV0dXJuICc8c3BhbiBjbGFzcz1cIicgKyBjbHMgKyAnXCI+JyArIG1hdGNoICsgJzwvc3Bhbj4nO1xuICB9KTtcbn1cblxuLy8gdW51c2VkXG4vLyBhc3luYyBmdW5jdGlvbiBzaWduSW4ocGFyYW1zKSB7XG4vLyAgICAgY29uc3QgeyBjdXN0b21lcl9pZCwgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBwYXJhbXM7XG4vLyAgICAgY29uc3QgVVJMID0gJ2h0dHBzOi8va3ljLWFwaS51c2ViLmNvLmtyL3NpZ24taW4nXG4vL1xuLy8gICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFVSTCwge1xuLy8gICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbi8vICAgICAgICAgaGVhZGVyczoge1xuLy8gICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4vLyAgICAgICAgICAgICBjdXN0b21lcl9pZDogTnVtYmVyKGN1c3RvbWVyX2lkKSxcbi8vICAgICAgICAgICAgIHVzZXJuYW1lLFxuLy8gICAgICAgICAgICAgcGFzc3dvcmRcbi8vICAgICAgICAgfSlcbi8vICAgICB9KTtcbi8vICAgICByZXR1cm4gYXdhaXQgYXdhaXQgcmVzLmpzb24oKTtcbi8vIH0iXSwibWFwcGluZ3MiOiJBQUFBLFNBQVNBLGNBQWNBLENBQUEsRUFBRztFQUN4QixJQUFNQyxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUNoREYsR0FBRyxDQUFDRyxLQUFLLENBQUNDLE9BQU8sR0FBRyxNQUFNO0VBQzFCSixHQUFHLENBQUNLLFNBQVMsR0FBRyxFQUFFO0FBQ3BCO0FBQ0EsU0FBU0MsY0FBY0EsQ0FBQ0MsR0FBRyxFQUFFO0VBQzNCLElBQU1DLGtCQUFrQixHQUFHUCxRQUFRLENBQUNDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQztFQUN4RSxJQUFJLENBQUMsQ0FBQyxDQUFDTSxrQkFBa0IsSUFBSSxDQUFDQSxrQkFBa0IsQ0FBQ0MsT0FBTyxFQUFFO0lBQ3hEO0VBQ0Y7RUFDQSxJQUFNVCxHQUFHLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLFdBQVcsQ0FBQztFQUNoRCxJQUFNUSxRQUFRLEdBQUdULFFBQVEsQ0FBQ1UsYUFBYSxDQUFDLEtBQUssQ0FBQztFQUM5Q0QsUUFBUSxDQUFDRSxTQUFTLEdBQUcsVUFBVTtFQUMvQkYsUUFBUSxDQUFDTCxTQUFTLEdBQUcsMkdBQTJHO0VBQ2hJLElBQU1RLEdBQUcsR0FBR1osUUFBUSxDQUFDVSxhQUFhLENBQUMsS0FBSyxDQUFDO0VBQ3pDRSxHQUFHLENBQUNELFNBQVMsR0FBRywyQkFBMkI7RUFDM0NDLEdBQUcsQ0FBQ1IsU0FBUyxHQUFHRSxHQUFHO0VBQ25CUCxHQUFHLENBQUNjLFdBQVcsQ0FBQ0osUUFBUSxDQUFDO0VBQ3pCVixHQUFHLENBQUNjLFdBQVcsQ0FBQ0QsR0FBRyxDQUFDO0VBQ3BCYixHQUFHLENBQUNHLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLE9BQU87QUFDN0I7QUFDQSxTQUFTVyxlQUFlQSxDQUFDQyxJQUFJLEVBQUU7RUFDN0JBLElBQUksR0FBR0EsSUFBSSxDQUFDQyxPQUFPLENBQUMsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDQSxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDQSxPQUFPLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQztFQUM5RSxPQUFPRCxJQUFJLENBQUNDLE9BQU8sQ0FBQyx3R0FBd0csRUFBRSxVQUFVQyxLQUFLLEVBQUU7SUFDN0ksSUFBSUMsR0FBRyxHQUFHLFFBQVE7SUFDbEIsSUFBSSxJQUFJLENBQUNDLElBQUksQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7TUFDcEIsSUFBSSxJQUFJLENBQUNFLElBQUksQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7UUFDcEJDLEdBQUcsR0FBRyxLQUFLO01BQ2IsQ0FBQyxNQUFNO1FBQ0xBLEdBQUcsR0FBRyxRQUFRO01BQ2hCO0lBQ0YsQ0FBQyxNQUFNLElBQUksWUFBWSxDQUFDQyxJQUFJLENBQUNGLEtBQUssQ0FBQyxFQUFFO01BQ25DQyxHQUFHLEdBQUcsU0FBUztJQUNqQixDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUNDLElBQUksQ0FBQ0YsS0FBSyxDQUFDLEVBQUU7TUFDN0JDLEdBQUcsR0FBRyxNQUFNO0lBQ2Q7SUFDQSxPQUFPLGVBQWUsR0FBR0EsR0FBRyxHQUFHLElBQUksR0FBR0QsS0FBSyxHQUFHLFNBQVM7RUFDekQsQ0FBQyxDQUFDO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=
