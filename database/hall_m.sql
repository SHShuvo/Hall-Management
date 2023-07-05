-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jul 05, 2023 at 03:08 AM
-- Server version: 10.4.20-MariaDB
-- PHP Version: 8.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hall_m`
--

-- --------------------------------------------------------

--
-- Table structure for table `departments`
--

CREATE TABLE `departments` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `code` tinyint(4) NOT NULL,
  `name` varchar(191) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `departments`
--

INSERT INTO `departments` (`id`, `code`, `name`) VALUES
(1, 56, 'ICE'),
(2, 55, 'CSE'),
(3, 51, 'EEE'),
(4, 34, 'CE');

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payments`
--

CREATE TABLE `payments` (
  `id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL,
  `amount` double(10,2) NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `payments`
--

INSERT INTO `payments` (`id`, `user_id`, `amount`, `date`, `created_at`, `updated_at`) VALUES
(13, 14, 100.00, '2023-05-31', '2023-07-04 11:39:49', '2023-07-04 11:39:49'),
(14, 14, 150.00, '2023-06-28', '2023-07-04 11:41:33', '2023-07-04 11:41:33'),
(15, 14, 135.87, '2023-07-01', '2023-07-04 11:42:49', '2023-07-04 11:42:49'),
(16, 13, 200.00, '2023-06-28', '2023-07-04 11:46:34', '2023-07-04 11:46:34'),
(17, 13, 200.00, '2023-07-01', '2023-07-04 11:48:28', '2023-07-04 11:48:28'),
(18, 13, 300.00, '2023-07-04', '2023-07-04 11:48:39', '2023-07-04 11:48:39'),
(19, 15, 100.00, '2023-06-24', '2023-07-04 11:49:25', '2023-07-04 11:49:25');

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `roles`
--

CREATE TABLE `roles` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `roles`
--

INSERT INTO `roles` (`id`, `name`) VALUES
(1, 'provost'),
(2, 'admin'),
(3, 'student');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `room_number` bigint(20) UNSIGNED NOT NULL,
  `number_of_seats` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rooms`
--

INSERT INTO `rooms` (`id`, `room_number`, `number_of_seats`, `created_at`, `updated_at`) VALUES
(10, 110, 3, '2023-07-04 11:11:16', '2023-07-04 11:11:16'),
(11, 220, 2, '2023-07-04 11:12:25', '2023-07-04 11:12:25'),
(12, 305, 4, '2023-07-04 11:12:57', '2023-07-04 11:12:57');

-- --------------------------------------------------------

--
-- Table structure for table `seats`
--

CREATE TABLE `seats` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `seat_number` tinyint(4) NOT NULL,
  `room_id` bigint(20) UNSIGNED NOT NULL,
  `allocated_user` bigint(20) DEFAULT NULL,
  `allocated_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `seats`
--

INSERT INTO `seats` (`id`, `seat_number`, `room_id`, `allocated_user`, `allocated_date`) VALUES
(18, 1, 10, NULL, NULL),
(19, 2, 10, 13, '2023-05-06'),
(20, 3, 10, NULL, NULL),
(21, 1, 11, NULL, NULL),
(22, 2, 11, 15, '2023-06-03'),
(23, 1, 12, NULL, NULL),
(24, 2, 12, NULL, NULL),
(25, 3, 12, 16, '2023-07-04'),
(26, 4, 12, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student_details`
--

CREATE TABLE `student_details` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `department` bigint(20) DEFAULT NULL,
  `session` varchar(20) DEFAULT NULL,
  `allocated_date` date DEFAULT NULL,
  `cancelled_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_details`
--

INSERT INTO `student_details` (`id`, `user_id`, `department`, `session`, `allocated_date`, `cancelled_date`) VALUES
(6, 13, 56, '2011-2012', '2023-05-06', NULL),
(7, 14, 55, '2012-2013', '2023-05-15', '2023-07-01'),
(8, 15, 51, '2012-2013', '2023-06-03', NULL),
(9, 16, 56, '2014-2015', '2023-07-04', NULL),
(10, 17, 34, '2016-2017', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `student_migrations`
--

CREATE TABLE `student_migrations` (
  `id` bigint(20) NOT NULL,
  `student_id` bigint(20) NOT NULL,
  `previous_seat_id` tinyint(4) NOT NULL,
  `new_seat_id` tinyint(4) NOT NULL,
  `date` date NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `roll` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role_id` bigint(20) UNSIGNED NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `phone`, `roll`, `role_id`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(2, 'Provost', 'provost@gmail.com', NULL, '', 1, NULL, '$2y$10$FRNXtBhoY/Crifoq4R1hVuojK6hzcOSJEXy6liJWYXWb/ebsDusCO', NULL, NULL, NULL),
(3, 'Admin 1', 'admin1@gmail.com', '01722633140', NULL, 2, NULL, '$2y$10$YE7oMtIccFOwN1KbxPIcBOd.4tDWDC72/ZTbs0rxfTYS..ohOdF.i', NULL, '2023-04-04 13:43:04', '2023-04-04 13:43:04'),
(11, 'Admin2', 'admin2@gmail.com', '01627768447', NULL, 2, NULL, '$2y$10$lWqGiKWsbpv0F7CQuDVM8Ob1aSnSK3cAQhI.fc8Pb.9wq5X9kv.bm', NULL, '2023-07-04 00:23:50', '2023-07-04 00:23:50'),
(13, 'Md. Tofail Ahmed', 'tofail.ru@gmail.com', '01722633140', '12115606', 3, NULL, '$2y$10$l8ep0R87hUyWsuvPHnWomeDxETHfAgiAvjuKPnDcdSiWPgKmAP1qi', NULL, '2023-07-04 11:14:21', '2023-07-04 11:14:21'),
(14, 'Md. Sajjad Hossain', 'shuvo@gmai.com', '01571726767', '13115616', 3, NULL, '$2y$10$BBekcUUOSlXHPYNVFdsrFOaplSIGK1NMoPrSF1fGfRvrjVP8NAl/S', NULL, '2023-07-04 11:15:52', '2023-07-04 11:15:52'),
(15, 'Md. Jalal Uddin', 'jalal@gmail.com', '01557234567', '13115620', 3, NULL, '$2y$10$wned2i4yZ.8p1UXfRZYCiueC5t2/4mHeiw8XcrCbkFVRfiQ/CH5a6', NULL, '2023-07-04 11:17:03', '2023-07-04 11:17:03'),
(16, 'Sofiqul Islam', 'sofiq231@gmail.com', '01723456389', '14115602', 3, NULL, '$2y$10$Y/cYiP4FVVxJDQC6tVAcIuNrINLN8uG5VTxBviNTNGKB.hi4wx0HG', NULL, '2023-07-04 11:18:53', '2023-07-04 11:18:53'),
(17, 'Md. Jillur Rahman', NULL, '01627879860', '17115617', 3, NULL, '$2y$10$54JksLG/PVKln4kCS/E9Tu7NkUfz7jKEVgHMjZoIunciAlpHug2Vm', NULL, '2023-07-04 11:19:56', '2023-07-04 11:19:56');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `departments`
--
ALTER TABLE `departments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `payments`
--
ALTER TABLE `payments`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `roles`
--
ALTER TABLE `roles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `seats`
--
ALTER TABLE `seats`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seats_room_id_index` (`room_id`);

--
-- Indexes for table `student_details`
--
ALTER TABLE `student_details`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `student_migrations`
--
ALTER TABLE `student_migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD UNIQUE KEY `users_roll_unique` (`roll`),
  ADD KEY `users_role_id_index` (`role_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `departments`
--
ALTER TABLE `departments`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `payments`
--
ALTER TABLE `payments`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `roles`
--
ALTER TABLE `roles`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `student_details`
--
ALTER TABLE `student_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `student_migrations`
--
ALTER TABLE `student_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `seats`
--
ALTER TABLE `seats`
  ADD CONSTRAINT `seats_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_role_id_foreign` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
