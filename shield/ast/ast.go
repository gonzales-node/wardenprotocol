package ast

import (
	"fmt"
	"strconv"

	"github.com/warden-protocol/wardenprotocol/shield/token"
)

type Node interface {
	TokenLiteral() string
}

type Expression interface {
	Node
	expressionNode()
}

type Identifier struct {
	Token token.Token
	Value string
}

func NewIdent(name string) *Identifier {
	return &Identifier{
		Token: token.Token{
			Type:    token.Type_IDENT,
			Literal: name,
		},
		Value: name,
	}
}

func (i *Identifier) expressionNode()      {}
func (i *Identifier) TokenLiteral() string { return i.Token.Literal }
func (i *Identifier) String() string       { return i.Value }

type IntegerLiteral struct {
	Token token.Token
	Value int64
}

func NewInt(value int64) *IntegerLiteral {
	return &IntegerLiteral{
		Token: token.Token{
			Type:    token.Type_INT,
			Literal: strconv.FormatInt(value, 10),
		},
		Value: value,
	}
}

func (il *IntegerLiteral) expressionNode()      {}
func (il *IntegerLiteral) TokenLiteral() string { return il.Token.Literal }
func (il *IntegerLiteral) String() string       { return il.Token.Literal }

type BooleanLiteral struct {
	Token token.Token
	Value bool
}

func NewBool(value bool) *BooleanLiteral {
	var (
		tokenType token.Type = token.Type_FALSE
		tokenLit             = "false"
	)
	if value {
		tokenType = token.Type_TRUE
		tokenLit = "true"
	}

	return &BooleanLiteral{
		Token: token.Token{
			Type:    tokenType,
			Literal: tokenLit,
		},
		Value: value,
	}
}

func (bl *BooleanLiteral) expressionNode()      {}
func (bl *BooleanLiteral) TokenLiteral() string { return bl.Token.Literal }
func (bl *BooleanLiteral) String() string       { return bl.Token.Literal }

type ArrayLiteral struct {
	Token    token.Token // the '[' token
	Elements []Expression
}

func (al *ArrayLiteral) expressionNode()      {}
func (al *ArrayLiteral) TokenLiteral() string { return al.Token.Literal }
func (al *ArrayLiteral) String() string {
	return fmt.Sprintf("%v", al.Elements)
}

type CallExpression struct {
	Token     token.Token // the '(' token
	Function  *Identifier
	Arguments []Expression
}

func (ce *CallExpression) expressionNode()      {}
func (ce *CallExpression) TokenLiteral() string { return ce.Token.Literal }
func (ce *CallExpression) String() string {
	return fmt.Sprintf("%s(%s)", ce.Function, ce.Arguments)
}

type InfixExpression struct {
	Token    token.Token // The operator token, e.g. '&&'
	Left     Expression
	Operator string
	Right    Expression
}

func (ie *InfixExpression) expressionNode()      {}
func (ie *InfixExpression) TokenLiteral() string { return ie.Token.Literal }
func (ie *InfixExpression) String() string {
	return fmt.Sprintf("(%s %s %s)", ie.Left, ie.Operator, ie.Right)
}
