function isTouching(target1, target2) {
    if (target1.x - target2.x < (target1.width + target2.width) / 2 &&
        target2.x - target1.x < (target1.width + target2.width) / 2 &&
        target1.y - target2.y < (target1.height + target2.height) / 2 &&
        target2.y - target1.y < (target1.height + target2.height) / 2) {
        return true;
    }
    else {
        return false;
    }
}

function bounce(target1, target2) {
    if (target1.x - target2.x < (target1.width + target2.width) / 2 &&
        target2.x - target1.x < (target1.width + target2.width) / 2) {
        target1.velocityX *= (-1);
        target2.velocityX *= (-1);
    }


    if (target1.y - target2.y < (target1.height + target2.height) / 2 &&
        target2.y - target1.y < (target1.height + target2.height) / 2) {
        target1.velocityY *= (-1);
        target2.velocityY *= (-1);
    }
}

function bounceOff(target1, target2) {
    if (target1.x - target2.x < (target1.width + target2.width) / 2 &&
        target2.x - target1.x < (target1.width + target2.width) / 2) {
        target1.velocityX *= (-1);
    }


    if (target1.y - target2.y < (target1.height + target2.height) / 2 &&
        target2.y - target1.y < (target1.height + target2.height) / 2) {
        target1.velocityY *= (-1);
    }
}