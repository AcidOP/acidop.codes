---
title: "How to Use 2Captcha to Solve reCaptcha V3 Challenges in Python 3"
date: '2023-02-16'
tags: ['python']
draft: false
summary: 'The tutorial "How to Solve reCaptcha V3 Using Python and 2Captcha" shows how to use Python and the 2Captcha API to solve reCaptcha V3 challenges. It explains the differences between reCaptcha V2 and V3, how reCaptcha V3 works, and how to use the 2Captcha API to solve reCaptcha challenges. The tutorial provides step-by-step instructions and sample Python code for developers.'
images: []
layout: PostLayout
canonicalUrl:
authors: ['default']
---

<TOCInline toc={props.toc} toHeading={3} indentDepth={3} />

<br />

# Introduction

Are you tired of being locked out of websites that use reCaptcha V3?

Don't worry boys, for we have a solution! In this blog, we'll teach you how to use Python and the 2Captcha library to solve reCaptcha V3 challenges.

But first, let's talk about why reCaptcha V3 is such a **pain in the bot**. Unlike previous versions of reCaptcha, V3 doesn't require users to solve a visual puzzle. Instead, it assigns a **score to each user** based on their browsing behavior, and if their score falls below a certain threshold, they'll be prompted to solve a challenge.

This is a problem for bots and automation tools because they don't behave like normal users. Even if you try to mimic human behavior, your score might still be too low to bypass the challenge. That's where 2Captcha comes in.

# What is [2Captcha](https://2captcha.com/about)?

**2Captcha** is a third-party service that uses human workers to solve challenges like reCaptcha. It's like outsourcing your captcha-solving to an army of freelancers. 

The process is **simple** and **lightning** fast 🔥: 
1. You send the challenge to 2Captcha `(captcha -> 2Captcha)`
2. They send it to a worker `(2Captcha -> worker)`
3. A worker solves it `(worker -> 2Captcha)`
4. The solution is sent to you `(2Captcha -> you)`

You can use 2Captcha for free, but you'll need to pay for credits to access the service. The cost varies depending on the number of credits you buy, but it's generally affordable. And it's a small price to pay for the convenience of not having to solve reCaptcha challenges yourself.

# Setting up the 2Captcha API

1. To use 2Captcha, you'll need to [create an account](https://2captcha.com/auth/register) and get an [API key](https://2captcha.com/enterpage#recognition). Once you have your API key, you can use the 2Captcha Python library to send challenges to the service and get the solutions.

2. Install the 2Captcha Python library:

```bash
pip3 install 2captcha-python
```

3. Create a new Python file and import the 2Captcha library:

```python
import twocaptcha

api_key = 'YOUR_API_KEY_HERE'
solver = twocaptcha.TwoCaptcha(api_key)
```

# Getting the Sitekey and Action

Before you can solve a reCaptcha challenge, you'll need to know the sitekey and action. These values are embedded in the HTML of the website you're trying to access.

**<u>P.S.</u>** This is the boring and hard part. I promise it gets better from here 😅.

To get the sitekey and action, you can use regular expressions to search for them in the HTML. Here's some sample code that shows you how to do that:

```python
import requests
import re

url = 'https://www.example.com'
html = requests.get(url).text

# Set the regex patterns
sitekey_pattern = re.compile(r"data-sitekey='(.*?)'")
action_pattern = re.compile(r'action="(.*?)"')

# Search the HTML for the sitekey and action
sitekey_match = sitekey_pattern.search(html)
action_match = action_pattern.search(html)

# Check if the sitekey and action were found
if sitekey_match:
    sitekey = sitekey_match.group(1)
else:
    sitekey = None

if action_match:
    action = action_match.group(1)
else:
    action = None

# Error & exit if the sitekey or action were not found
if (sitekey == None) or (action == None):
    print("Error: Sitekey or Action not found ❌")
    print(f"Sitekey: {sitekey} | Action: {action}")
    exit()
```

The code assumes that the website's reCAPTCHA `sitekey` and `action` are located within the HTML code using the patterns `data-sitekey='(.*?)'` and `action="(.*?)"`, respectively. If the website's HTML code uses different patterns you need to change the regex patterns accordingly.

If **<u>no matches</u>** are found, the code will print an error message and exit. Fix your regex patterns and try again.

**<u>NOTE</u>**: If you're not familiar with regular expressions or making requests in python, here are some resources that can help you get started 🤗:

* Use this [Regex Cheatsheet](https://www.rexegg.com/regex-quickstart.html) if you want some help with regular expressions.
* Read the `requests` library documentation [here](https://requests.readthedocs.io/en/master/).

<br />

# Solving the reCaptcha Challenge

Now that you have the `sitekey` and `action`, you can send the reCaptcha challenge to 2Captcha and get the solution. Here's some sample code that shows you how to do that:

```python
result = solver.recaptcha(
  sitekey=sitekey,
  url=url,
  version="3",
  action=action,
  score=0.6
)

print(result)
```

**<u>NOTE</u>**: The code assumes that you're using reCaptcha V3, but you can also use it to solve reCaptcha V2 challenges. To do that, you'll need to pass only the `sitekey` and `url`.


# Final Code
```python
import re
import requests
import twocaptcha

url = 'https://www.example.com'
html = requests.get(url).text

# Set the regex patterns
sitekey_pattern = re.compile(r"data-sitekey='(.*?)'")
action_pattern = re.compile(r'action="(.*?)"')

# Search the HTML for the sitekey and action
sitekey_match = sitekey_pattern.search(html)
action_match = action_pattern.search(html)

# Check if the sitekey and action were found
if sitekey_match:
    sitekey = sitekey_match.group(1)
else:
    sitekey = None

if action_match:
    action = action_match.group(1)
else:
    action = None

# Error & exit if the sitekey or action were not found
if (sitekey == None) or (action == None):
    print("Error: Sitekey or Action not found ❌")
    print(f"Sitekey: {sitekey} | Action: {action}")
    exit()


result = solver.recaptcha(
  sitekey=sitekey,
  url=url,
  version="3",
  action=action,
  score=0.3
  )

print(result)

```

# Conclusion

And there you have it, folks! Now you know how to implement 2Captcha in your Python scripts. You can use this technique to automate any task that requires solving reCaptcha challenges. 


# Helpful Resources 📚

1. [2Captcha Python Library](https://pypi.org/project/2captcha-python/)
2. [2Captcha API Documentation](https://2captcha.com/2captcha-api)
3. [Google reCaptcha V3](https://developers.google.com/recaptcha/docs/v3)
4. [Selenium WebDriver](https://www.selenium.dev/documentation/en/webdriver/)
5. [Beautiful Soup library](https://www.crummy.com/software/BeautifulSoup/bs4/doc/)

<br />