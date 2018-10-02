<?php
/**
 * Created by PhpStorm.
 * User: elminsondeoleobaez
 * Date: 10/2/18
 * Time: 6:00 PM
 */

require "Permutations.php";
$perm = new Permutations();
$perm->permutation([[1, 2], [3, 4]]);

print_r($perm->result);