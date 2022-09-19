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
    setFocusPolicy(Qt::StrongFocus);
    Tetris game(ui,scene);
    timer = new QTimer();
    connect(timer, SIGNAL(timeout()),scene, SLOT(advance()));
    timer->start(1000);
}

Dialog::~Dialog()
{
    delete ui;
}

void Dialog::keyPressEvent(QKeyEvent *event)
{
    switch (event->key()) {
    case Qt::Key_Left:
        qDebug() << "moveLeft()";
        emit Tetris::Game.boardChanged(BoardEvent::West);
        break;
    case Qt::Key_Right:
        qDebug() << "moveRight()";
        emit Tetris::Game.boardChanged(BoardEvent::East);
        break;
    case Qt::Key_Down:
        qDebug() << "keyDown()";
        break;
    case Qt::Key_Up:
        qDebug() << "rotate()";
        emit Tetris::Game.boardChanged(BoardEvent::North);
        break;
    case Qt::Key_Space:
        qDebug() << "dropDown()";
        emit Tetris::Game.boardChanged(BoardEvent::North);
        break;
    default:
        qDebug() << "pressed " << event->key();
        QDialog::keyPressEvent(event);
    }
}
