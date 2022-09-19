#ifndef TETRIS_H
#define TETRIS_H
#include <QPainter>
#include <QGraphicsScene>
#include <QTimer>
#include <QTime>
#include <QPair>
#include "ui_dialog.h"
#include <QVector>
#include <QBrush>
#include <QDebug>
#include <QColor>
#include <QKeyEvent>
//#include "gamefield.h"
#include "square.h"
#include "block.h"
//forward declare
class GameField;
class Square;

class Tetris
{
public:
    Tetris(Ui::Dialog *ui, QGraphicsScene *scene);
    static int SQS;
    static int LEVEL;
    static GameField Game;

    static QColor backColors[];
    static QColor foreColors[];

    void init();
private:
    QGraphicsScene *scene;
};

#endif // TETRIS_H
