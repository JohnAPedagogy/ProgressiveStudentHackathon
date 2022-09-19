// dialog.h

#ifndef DIALOG_H
#define DIALOG_H

#include <QDialog>
#include <QGraphicsScene>
#include <QTimer>

namespace Ui {
class Dialog;
}

class Dialog : public QDialog
{
    Q_OBJECT

public:
    explicit Dialog(QWidget *parent = 0);
    ~Dialog();
protected:
    void keyPressEvent(QKeyEvent *event) override;

private:
    Ui::Dialog *ui;
    QGraphicsScene *scene;
    QTimer *timer;
};

#endif // DIALOG_H
