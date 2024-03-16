---
title: How to use testdata in Golang
description: When you want to use testdata in in multiple tests, getting the proper path to the testdata can be a bit tricky. This post shows how to do it in a scalable and maintainable way.
created: '2024-03-16'
categories:
  - golang
  - testing
published: true
---

## Definition: testdata

You can store files that will be used in a `testdata` directory. The
directory [will be ignored by the go compiler](https://github.com/golang/go/blob/68d3a9e417344c11426f158c7a6f3197a0890ff1/src/cmd/go/internal/test/test.go#L74),
so it won't be included in the final binary.

As so, it's good practice to store files that are used in tests in a `testdata` directory.

## Use case

### Simple usage: Using `testdata` which is only used for the containing package

```text
# Project structure
.
└── internal
    └── myPackage
        ├── myPackage.go
        ├── myPackage_test.go
        └── testdata // [!code highlight]
            └── fixture.txt
```

When the `testdata` directory is in the same package as the test file, you can easily use the relative path to access
it. This is because the working directory is the package directory which the test file resides in.

```go
// myPackage_test.go
package myPackage

import (
  "io/ioutil"
  "path/filepath"
  "testing"
)

func TestMyFunction(t *testing.T) {
  data, err := ioutil.ReadFile(filepath.Join("testdata", "fixture.txt"))
  if err != nil {
    t.Fatal(err)
  }
  // ...
}
```

However, things get a bit more complicated when you want to use the `testdata` directory in a different package.

### Using `testdata` for testing multiple packages

```text
# Project structure
.
├── internal
│   ├── package1
│   │   ├── pacakge1.go
│   │   ├── package1_test.go
│   │   └── testdata
│   └── package2
│       ├── package2.go
│       ├── package2_test.go
│       └── testdata
└── testdata
    └── fixture.txt
```

When you want to use some `testdata` for **multiple** tests, getting the proper path to the testdata can be a bit
tricky. This is because you'd have to go up the package hierarchy to get to the `testdata` directory(
e.g. `../../testdata`). This is a very cumbersome approach, since you'll have to update the path every time you refactor
your code.

```go
// package1_test.go
package package1

import (
  "io/ioutil"
  "path/filepath"
  "testing"
)

func TestMyFunction(t *testing.T) {
  data, err := ioutil.ReadFile(filepath.Join("../../testdata", "fixture.txt"))
  if err != nil {
    t.Fatal(err)
  }
  // ...
}
```

## Possible options

### 1. Use `os.Getwd()`

Doesn't work since the working directory returns the package where the test file is located

### 2. Use a environment varaiable to get the root directory path

This solution has a problem that for every environment you run your test in(device, CI, etc), you have to set the
environment variable. This is not a scalable solution.

### 3. Create a separate package for getting test utils and data

You can create a separate package for getting needed test utility functions and data.

## Option 3: Create a separate package for getting test utils and data

You can create a separate package `testutil` and delegate the responsibility of getting the relevant path to
the `testdata` directory.

```text
# Project structure
.
├── internal
│   ├── package1
│   │   ├── pacakge1.go
│   │   ├── package1_test.go
│   │   └── testdata
│   └── package2
│       ├── package2.go
│       ├── package2_test.go
│       └── testdata
└── testutil
    ├── getData.go
    └── testdata
        └── fixture.txt
```

```go
// getData.go
package testutil

import (
"path/filepath"
"runtime"
)

func GetTestdataPath() string {
  _, currentFile, _, \_ := runtime.Caller(0)
  testDir := filepath.Dir(currentFile)
  return filepath.Join(testDir, "testdata")
}

```

```go
// package1_test.go
package package1

import (
  "io/ioutil"
  "path/filepath"
  "testing"
  "testutil"
)

func TestMyFunction(t *testing.T) {
  data, err := ioutil.ReadFile(filepath.Join(testutil.GetTestdataPath(), "fixture.txt"))
  if err != nil {
    t.Fatal(err)
  }
  // ...
}
```
