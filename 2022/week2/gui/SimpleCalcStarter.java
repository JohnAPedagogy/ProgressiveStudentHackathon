import javax.swing.JFrame;
import javax.swing.JPanel;
import javax.swing.JButton;
import javax.swing.JTextField;
import java.awt.BorderLayout;
import java.awt.GridLayout;
import java.awt.event.ActionListener;
import java.awt.event.ActionEvent;

public class SimpleCalcStarter extends JFrame implements ActionListener {
    public SimpleCalc() {
        //initialise frame
        //create button grid
        JPanel buttons = this.createButtonGrid();
        //this.initFrame();
        //creating a button
        JTextField display = new JTextField("0", 10);
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
        buttons.add(new JButton("A/C"));
        buttons.add(new JButton("C"));
        buttons.add(new JButton("M+"));
        buttons.add(new JButton("+/-"));
        buttons.add(new JButton("7"));
        buttons.add(new JButton("8"));
        buttons.add(new JButton("9"));
        buttons.add(new JButton("x"));
        buttons.add(new JButton("4"));
        buttons.add(new JButton("5"));
        buttons.add(new JButton("6"));
        buttons.add(new JButton("/"));
        buttons.add(new JButton("1"));
        buttons.add(new JButton("2"));
        buttons.add(new JButton("3"));
        buttons.add(new JButton"-"));
        buttons.add(new JButton("."));
        buttons.add(new JButton("0"));
        buttons.add(new JButton("="));
        buttons.add(new JButton("+"));
        return buttons;
    }

    public static void main(String[] a) {
        new SimpleCalc();
    }
}
