import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JButton;
import javax.swing.JTextField;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class SimpleCalc extends JFrame implements ActionListener {
    JTextField display;
    JButton ac = new JButton("A/C");
    JButton c = new JButton("C");
    JButton mplus = (new JButton("M+"));
    JButton pm = (new JButton("+/-"));
    JButton d7 = (new JButton("7"));
    JButton d8 = (new JButton("8"));
    JButton d9 = (new JButton("9"));
    JButton mul = (new JButton("x"));
    JButton d4 = (new JButton("4"));
    JButton d5 = (new JButton("5"));
    JButton d6 = (new JButton("6"));
    JButton div=(new JButton("/"));
    JButton d1 = (new JButton("1"));
    JButton d2= (new JButton("2"));
    JButton d3 = (new JButton("3"));
    JButton sub = (new JButton("-"));
    JButton dec = (new JButton("."));
    JButton d0 = (new JButton("0"));
    JButton ans = (new JButton("="));
    JButton add = (new JButton("+"));

    public void initFrame(){
        ac.addActionListener(this);//JButton ac = new JButton("A/C");
        c.addActionListener(this);//        JButton c = new JButton("C");
        mplus.addActionListener(this);//        JButton mplus = (new JButton("M+"));
        pm.addActionListener(this);    //        JButton pm = (new JButton("+/-"));
        d7.addActionListener(this);    //        JButton d7 = (new JButton("7"));
        d8.addActionListener(this);    //        JButton d8 = (new JButton("8"));
        d9.addActionListener(this);    //        JButton d9 = (new JButton("9"));
        mul.addActionListener(this);    //        JButton mul = (new JButton("x"));
        d4.addActionListener(this);    //        JButton  = (new JButton("4"));
        d5.addActionListener(this);   //        JButton  = (new JButton("5"));
        d6.addActionListener(this);    //        JButton  = (new JButton("6"));
        div.addActionListener(this);    //        JButton =(new JButton("/"));
        d1.addActionListener(this);    //        JButton  = (new JButton("1"));
        d2.addActionListener(this);    //        JButton = (new JButton("2"));
        d3.addActionListener(this);    //        JButton  = (new JButton("3"));
        sub.addActionListener(this);    //        JButton  = (new JButton("-"));
        dec.addActionListener(this);    //        JButton  = (new JButton("."));
        d0.addActionListener(this);    //        JButton  = (new JButton("0"));
        ans.addActionListener(this);    //        JButton  = (new JButton("="));
        add.addActionListener(this);    //        JButton  = (new JButton("+"));
    }
    public void actionPerformed(ActionEvent evt){
      String op=evt.getActionCommand();
      //display.setText(calc.calculate(op));
     display.setText(op);
    }
    public SimpleCalc() {
        //initialise frame
        //create button grid
        JPanel buttons = this.createButtonGrid();
        this.initFrame();
        //creating a button
        display = new JTextField("0", 10);
        //add contents and show frame
        getContentPane().add(buttons, BorderLayout.CENTER);
        getContentPane().add(display, BorderLayout.NORTH);
        setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        this.pack();
        setVisible(true);
    }

    private JPanel createButtonGrid() {
        JPanel buttons = new JPanel();
        buttons.setLayout(new GridLayout(5, 4));
        buttons.add(ac);
        buttons.add(c);
        buttons.add(mplus);
        buttons.add(pm);
        buttons.add(d7);
        buttons.add(d8);
        buttons.add(d9);
        buttons.add(mul);
        buttons.add(d4);
        buttons.add(d5);
        buttons.add(d6);
        buttons.add(div);
        buttons.add(d1);
        buttons.add(d2);
        buttons.add(d3);
        buttons.add(sub);
        buttons.add(dec);
        buttons.add(d0);
        buttons.add(ans);
        buttons.add(add);
        return buttons;
    }

    public static void main(String[] a) {
        new SimpleCalc();
    }
}
