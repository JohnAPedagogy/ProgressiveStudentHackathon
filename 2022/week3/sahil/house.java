package sahil;

import javax.swing.*;
import java.awt.*;
import java.applet.*;

public class house extends JPanel {
    public void paintComponent(Graphics g)
    {
        Graphics2D g2= (Graphics2D)g;
        super.paintComponents(g);
        g2.setRenderingHint( RenderingHints.KEY_ANTIALIASING,
                RenderingHints.VALUE_ANTIALIAS_ON );
        //for the roof
        Image image = new ImageIcon("images.jpg").getImage();
        if(image==null)
        {
            javax.swing.JOptionPane.showMessageDialog(this, "image not found", "Image Icon Error",JOptionPane.OK_OPTION );
        }else{
            g.drawImage(image,0,0,this);
        }        
        g.setColor(Color.yellow);
        int x[]={100,160,220};
        int y[]={100,50,100};
        Polygon poly= new Polygon(x,y,3);
        g.fillPolygon(poly);
        //boyd of house
        g.drawRect(240,30,50,50);
        g.setColor(Color.blue);
        //door
        g.fillRect(145,160,30,60);
        g.setColor(Color.black);
        //chimney
        g.fillRect(12,55,10,30);
        g.setColor(Color.black);
    }

    public static void main(String[] args) {
        JFrame frame= new JFrame("Home");
              //  house home= new house();
                frame.setVisible(true);
        frame.setSize(500,500);
        //frame.add(new house());
        frame.getContentPane().add(new house());
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setVisible(true);
    }
}
