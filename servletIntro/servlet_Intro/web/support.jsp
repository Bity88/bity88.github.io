<%--
  Created by IntelliJ IDEA.
  User: baniy
  Date: 6/12/2019
  Time: 1:41 PM
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>CSTECH Support</title>
</head>
<body>

    <form action="support" method="post">

        Name:  <input type="text" id="name" name="name"> <br/>
        Email Address:  <input type="email" id="email" name="email"> <br/>
        Problem:  <input type="text" id="problem"> <br/>
        <textarea id="desc"></textarea>
        <input type="submit" value="submit">

    </form>

</body>
</html>
