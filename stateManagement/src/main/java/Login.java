import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.io.PrintWriter;


@WebServlet("/login")
public class Login extends HttpServlet {

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
            String username = req.getParameter("username");
            String password = req.getParameter("password");

            PrintWriter out = resp.getWriter();



            if(UserList.validateUser(username,password)){

                HttpSession session = req.getSession();
                session.setAttribute("username",username);
                RequestDispatcher rs = req.getRequestDispatcher("index");
                rs.forward(req, resp);

            }

            else{

                 out.println("<html><body>Username or Password incorrect</body><html>");

            }


    }
}
