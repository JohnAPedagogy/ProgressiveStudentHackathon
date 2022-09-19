#include "tetris.h"

int Tetris::SQS = 20;
int Tetris::LEVEL = 0;
GameField Tetris::Game;

QColor Tetris::backColors[] = {
    QColor(Qt::color0),
    QColor(Qt::black),
    QColor(Qt::darkRed),
    QColor(Qt::darkBlue),
    QColor(Qt::yellow),
    QColor(Qt::darkGreen),
    QColor(Qt::white),
    QColor(Qt::black)
};

QColor Tetris::foreColors[] = {
    QColor(Qt::color0),
    QColor(Qt::magenta),
    QColor(Qt::blue),
    QColor(Qt::yellow),
    QColor(Qt::red),
    QColor(Qt::green),
    QColor(Qt::black),
    QColor(Qt::white)
};
Tetris::Tetris(Ui::Dialog* ui, QGraphicsScene *scene)
{
    ui->graphicsView->setScene(scene);

    // anti-aliasing
    ui->graphicsView->setRenderHint(QPainter::Antialiasing);

    //
    // The bounding rectangle of the scene
    // The scene rectangle defines the extent of the scene.
    // It is primarily used by QGraphicsView
    // to determine the view's default scrollable area,
    // and by QGraphicsScene to manage item indexing.
    // void	setSceneRect(qreal x, qreal y, qreal w, qreal h)
    scene->setSceneRect(0, 0,Game.boardWidth(), Game.boardHeight());

    QLineF topLine(scene->sceneRect().topLeft(),
                   scene->sceneRect().topRight());
    QLineF leftLine(scene->sceneRect().topLeft(),
                   scene->sceneRect().bottomLeft());
    QLineF rightLine(scene->sceneRect().topRight(),
                   scene->sceneRect().bottomRight());
    QLineF bottomLine(scene->sceneRect().bottomLeft(),
                   scene->sceneRect().bottomRight());

    QPen myPen = QPen(Qt::red);

    scene->addLine(topLine, myPen);
    scene->addLine(leftLine, myPen);
    scene->addLine(rightLine, myPen);
    scene->addLine(bottomLine, myPen);

    Game.start(scene);
}
void Tetris::init(){
    //allow user to move left and right
    //detect wall and bottom collision collision


}

/* Qt colors

Constant	Value	Description
Qt::white	3	White (#ffffff)
Qt::black	2	Black (#000000)
Qt::red	7	Red (#ff0000)
Qt::darkRed	13	Dark red (#800000)
Qt::green	8	Green (#00ff00)
Qt::darkGreen	14	Dark green (#008000)
Qt::blue	9	Blue (#0000ff)
Qt::darkBlue	15	Dark blue (#000080)
Qt::cyan	10	Cyan (#00ffff)
Qt::darkCyan	16	Dark cyan (#008080)
Qt::magenta	11	Magenta (#ff00ff)
Qt::darkMagenta	17	Dark magenta (#800080)
Qt::yellow	12	Yellow (#ffff00)
Qt::darkYellow	18	Dark yellow (#808000)
Qt::gray	5	Gray (#a0a0a4)
Qt::darkGray	4	Dark gray (#808080)
Qt::lightGray	6	Light gray (#c0c0c0)
Qt::transparent	19	a transparent black value (i.e., QColor(0, 0, 0, 0))
Qt::color0	0	0 pixel value (for bitmaps)
Qt::color1	1	1 pixel value (for bitmaps)

*/
