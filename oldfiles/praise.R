# to set working directory to source file location
# setwd("C:\\Users\\DELL LATITUDE E7250\\Desktop\\KTU\\Econometrics Course\\Econometrics Assignments")
install.packages("languageserver")
rm(list=ls()) #to this is to clear variables
cat("\014")  #to clear console

# Question 1 Simulation exercise #
# Consider the normal distribution N(µ,σ2). Set µ = 0.3,σ = 0.9. Implement following steps K =1000 times.
# 1.1 Draw nk =10+2k points for k ={1,··· ,1000} 

# Set the mean and standard deviation for the normal distribution
mu <- 0.3
sigma <- 0.9

mu
sigma

# Set the number of iterations
K <- 1000

mysample <- rnorm(4000, mean = mu, sd = sigma)
print(mean(mysample))

# Initialize a list to store the drawn samples
samples_list <- vector("list", K)

# Loop over k from 1 to 1000
for (k in 1:K) {
  # Calculate the number of points to draw
  n_k <- 10 + 2 * k
  
  # Draw n_k points from the normal distribution
  samples <- rnorm(n_k, mean = mu, sd = sigma)
  
  # Store the samples in the list
  samples_list[[k]] <- samples
}

# 1.2 Compute muk and σ2k
# Initialize lists to store the drawn samples, means, and variances
samples_list <- vector("list", K)
means <- numeric(K)
variances <- numeric(K)

# Compute the sample mean
means[k] <- mean(samples)
  
# Compute the sample variance
variances[k] <- var(samples)

# Plot the sample means
plot(means, type = "l", main = "Sample Means", xlab = "Iteration k", ylab = "Sample Mean")

# Plot the sample variances
plot(variances, type = "l", main = "Sample Variances", xlab = "Iteration k", ylab = "Sample Variance")

# 1.3 Compute ∆µk = µ−µk, ∆σ2k = σ2−σ2k. Plot vectors ∆µk,∆σ2k against vector k ={1,··· ,1000} 
# Compute the differences
delta_means <- mu - means
delta_variances <- sigma^2 - variances

# Plot the differences for means
plot(1:K, delta_means, type = "l", col = "blue", 
     main = expression(Delta*mu[k]), 
     xlab = "Iteration k", ylab = expression(Delta*mu[k]))

# Plot the differences for variances
plot(1:K, delta_variances, type = "l", col = "red", main = expression(Delta*sigma^2[k]), xlab = "Iteration k", ylab = expression(Delta*sigma^2[k]))


