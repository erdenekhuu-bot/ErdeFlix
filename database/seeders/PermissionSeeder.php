<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use App\Models\User;
class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole=Role::create(['name' => 'super admin']);
        $customerRole=Role::create(['name' => 'customer']);
        $adminPermission=Permission::create(['name' => 'access admin dashboard']);
        $customerPermission=Permission::create(['name' => 'access user dashboard']);
        $adminRole->givePermissionTo($adminPermission);
        $customerRole->givePermissionTo($customerPermission);
        $admin_someone=User::factory()->create([
            'name' => 'erdenee',
            'email'=> 'erdenee@example.com',
            'password' => bcrypt('password'),
        ]);
        $admin_someone->assignRole('super admin');
        for($i = 1; $i <= 5; $i++) {
            $user = User::factory()->create([
                'name' => fake()->firstName(),
                'email' => fake()->unique()->safeEmail(),
                'password' => bcrypt('password'),
            ]);
            $user->assignRole('customer');
        }
    }
}
