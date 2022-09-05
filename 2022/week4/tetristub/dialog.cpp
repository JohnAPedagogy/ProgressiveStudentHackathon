// dialog.cpp

#include "dialog.h"
#include "ui_dialog.h"
#include "tetris.h"

Dialog::Dialog(QWidget *parent) :
    QDialog(parent),
    ui(new Ui::Dialog)
{
    ui->setupUi(this);
    scene = new QGraphicsScene(this);
    Tetris game(ui,scene);
    timer = new QTimer();
    connect(timer, SIGNAL(timeout()),scene, SLOT(advance()));
    timer->start(1000);
}

Dialog::~Dialog()
{
    delete ui;
}
