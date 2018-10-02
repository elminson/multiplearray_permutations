<?php
/**
 * Created by PhpStorm.
 * User: elminsondeoleobaez
 * Date: 10/2/18
 * Time: 5:52 PM
 */

class Permutations
{
  public $result;

  public function permutation($array)
  {
    $size = count($array);
    $indices = [];
    for ($index = 0; $index < $size; $index++) {
      $indices[$index] = 0;
    }

    while (1) {
      $res = [];
      for ($index = 0; $index < $size; $index++) {
        $res[] = $array[$index][$indices[$index]];
      }
      $this->result[] = join('', $res);
      $next = $size - 1;
      while ($next >= 0 &&
        ($indices[$next] + 1 >= count($array[$next]))) {
        $next--;
      }
      if ($next < 0)
        return;
      $indices[$next]++;
      for ($index = $next + 1; $index < $size; $index++)
        $indices[$index] = 0;

    }
  }
}

