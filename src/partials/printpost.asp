<!doctype html>
<html>
  <head>
    <title>Example Page</title>
    <meta charset="utf-8" />
  </head>
  <body>
   <table border="1">
    <tr style="background-color: lightblue;"><th>Parámetro</th><th>Valores</th></tr>
<%
  
  For Each parameter In request.form
    response.write("<tr><td>")
    response.write(parameter & "</td><td>")
    response.write(request.form(parameter))
    response.write("</td></tr>")
  Next

%>
    </table>
  </body>
</html>
