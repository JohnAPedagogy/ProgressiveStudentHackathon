#ifndef TETRIS_H
#define TETRIS_H
#include <QPainter>
#include <QGraphicsScene>
#include <QTimer>
#include <QPair>
#include "ui_dialog.h"
#include <QVector>
#include <QBrush>
#include "gamefield.h"
<<<<<<< HEAD
#include <QDebug>
=======
>>>>>>> 33fe5af0f750ad0c777a09fe580243b9157c95ab
//forward declare
class GameField;

class Tetris
{
public:
    Tetris(Ui::Dialog *ui, QGraphicsScene *scene);
    static int SQS;
    static int LEVEL;
    static GameField Game;
    void init();
private:
    QGraphicsScene *scene;
};

#endif // TETRIS_H
