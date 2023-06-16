-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 16, 2023 at 07:32 PM
-- Server version: 10.4.22-MariaDB
-- PHP Version: 7.4.27

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
(3, 51, 'MSE'),
(4, 34, 'Public Ad');

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

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_11_000000_create_roles_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2023_04_04_182758_create_rooms_table', 1),
(7, '2023_04_04_190130_create_seats_table', 1);

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
(1, 4, 12.00, '2023-05-01', '2023-05-01 10:39:30', '2023-05-01 10:39:30'),
(2, 5, 200.00, '2023-05-01', '2023-05-01 11:07:33', '2023-05-01 11:07:33'),
(3, 4, 300.00, '2023-06-13', '2023-05-02 11:27:53', '2023-05-02 11:27:53'),
(4, 4, 40.00, '2023-06-01', '2023-06-15 11:59:37', '2023-06-15 11:59:37'),
(5, 5, 67.00, '2023-06-01', '2023-06-16 05:06:24', '2023-06-16 05:06:24'),
(6, 5, 45.00, '2023-06-16', '2023-06-16 05:08:38', '2023-06-16 05:08:38'),
(7, 7, 88.00, '2023-06-16', '2023-06-16 05:10:33', '2023-06-16 05:10:33'),
(8, 4, 56.00, '2023-06-16', '2023-06-16 05:12:14', '2023-06-16 05:12:14');

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
(6, 108, 3, '2023-04-09 04:02:26', '2023-04-09 04:02:26'),
(7, 109, 4, '2023-04-09 04:08:19', '2023-04-09 04:08:19'),
(8, 233, 3, '2023-04-09 04:09:48', '2023-04-09 04:09:48'),
(9, 106, 2, '2023-04-09 07:45:05', '2023-04-09 07:45:05');

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
(6, 1, 6, NULL, NULL),
(7, 2, 6, 5, '2023-04-14'),
(8, 3, 6, NULL, NULL),
(9, 1, 7, NULL, NULL),
(10, 2, 7, NULL, NULL),
(11, 3, 7, NULL, NULL),
(12, 4, 7, NULL, NULL),
(13, 1, 8, NULL, NULL),
(14, 2, 8, NULL, NULL),
(15, 3, 8, NULL, NULL),
(16, 1, 9, NULL, NULL),
(17, 2, 9, NULL, NULL);

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
(1, 4, 56, '2011-16', '2023-06-10', '2023-06-16'),
(2, 5, 55, '2011-15', '2023-03-01', '2023-03-15'),
(3, 6, 34, '2011-12', NULL, NULL),
(4, 7, 51, '12087', '2023-05-13', NULL);

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

--
-- Dumping data for table `student_migrations`
--

INSERT INTO `student_migrations` (`id`, `student_id`, `previous_seat_id`, `new_seat_id`, `date`, `created_at`, `updated_at`) VALUES
(2, 4, 6, 8, '2023-05-26', '2023-05-26 04:52:26', '2023-05-26 04:52:26'),
(3, 4, 8, 9, '2023-05-26', '2023-05-26 04:52:57', '2023-05-26 04:52:57'),
(4, 4, 9, 6, '2023-05-27', '2023-05-26 04:58:00', '2023-05-26 04:58:00');

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
(3, 'Admin 1', 'admin1@gmail.com', NULL, NULL, 2, NULL, '$2y$10$YE7oMtIccFOwN1KbxPIcBOd.4tDWDC72/ZTbs0rxfTYS..ohOdF.i', NULL, '2023-04-04 13:43:04', '2023-04-04 13:43:04'),
(4, 'Shuvo', 'shuvo@gmail.com', '0163899999', '1234587', 3, NULL, '$2y$10$Xcc/f6xAaIBxIrkn7RpEcOd/4npsKZm/6Du8fX4kfJa/dVmABSZOO', NULL, '2023-04-04 13:44:03', '2023-05-02 12:34:32'),
(5, 'Tofael 2', 'tofael2@gmail.com', NULL, '123447', 3, NULL, '$2y$10$qETPqn/CoBJjp/KrhOqDS.wshO5UIF7DZg6xGeD16F3XudOegNe4C', NULL, '2023-04-09 23:51:06', '2023-04-14 05:10:51'),
(6, 'Sajjad', 'vi@gmail.com', NULL, '1235665', 3, NULL, '$2y$10$Kwn5VqLTZWfwuxyvrTLO3uMcq38vm43wGd8O5f9AbqNOp7rd5QHMS', NULL, '2023-04-18 11:56:53', '2023-04-18 11:56:53'),
(7, 'shu', NULL, NULL, '4567', 3, NULL, '$2y$10$mcTt24VprTASBIxF5YvYluOIYq3CjRlgoqFvLlzJ0h2YINBgFCVr6', NULL, '2023-04-18 12:37:40', '2023-04-18 12:37:40');

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

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
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `seats`
--
ALTER TABLE `seats`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `student_details`
--
ALTER TABLE `student_details`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_migrations`
--
ALTER TABLE `student_migrations`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

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
