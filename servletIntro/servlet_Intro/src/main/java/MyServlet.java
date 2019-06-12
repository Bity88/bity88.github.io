import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Date;
import java.util.UUID;

@WebServlet("/support")
public class MyServlet extends HttpServlet {


    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {



    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String name = req.getParameter("name");
        String email = req.getParameter("email");
        String id = (new Date()).toString() ;

        ServletContext sc = this.getServletContext();
        String support_email = sc.getInitParameter("support_email");

        PrintWriter out = resp.getWriter();
        out.print("<html><head><title>Support</title></head><body><p>");
        out.print("Thank you! <strong> " + name+ " </strong> for contacting us.");
        out.print(" We should receive reply from us with in 24 hrs in your email address " +email +
                ". Let us know in our support email <strong> " +support_email+ " </strong> if you don’t receive reply within 24 hrs." +
                " Please be sure to attach your reference " +id+ " in your email.</p>");
        out.print("</body></html>");

    }
}

